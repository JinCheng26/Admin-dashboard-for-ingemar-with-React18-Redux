import React from "react";
import PageHeader from "../../layouts/PageHeader/PageHeader";
interface PageWalletProps {}

const PageWallet: React.FC<PageWalletProps> = () => {
  return (
    <div>
      <PageHeader titles="Wallet" active="Wallet" items={["Home"]} />
    </div>
  );
};
export default PageWallet;
