import { useEffect, useState } from "react";

import Card from "../../../components/Card/Card";

import { Button } from "@/components/ui/button";
import { request } from "@/util/request/request";
import PurchaseProductChart from "@/components/chart/PurchaseProductChart";
import SaleChart from "@/components/chart/SaleChart";
import PurchaseChart from "@/components/chart/PurchaseChart";
import SaleThisMonthChart from "@/components/chart/SaleThisMonthChart";

export default function HomeAdminPage() {
  const [purchaseProduct, setPurchaseProduct] = useState([]);
  const [sale, setSale] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(false);
      const res = await request("purchase", "get");
      const sale = await request("order/getsale", "get");
      if (sale) {
        setSale(sale);
        console.log("Sale : ", sale);
      }
      const purchase = await request("purchase/summarypurchase", "get");
      if (purchase) {
        setPurchase(purchase);
        console.log("purchase : ", purchase);
      }
      if (res) {
        setLoading(true);
        setPurchaseProduct(res?.data);
        console.log(res?.data);
      }
    };

    fetchingData();
  }, []);

  return (
    <div>
      {/* <PurchaseProductChart data={purchaseProduct} /> */}
      <SaleChart data={sale?.summary_sale_by_month} />
      <PurchaseChart data={purchase?.summary_purchase_by_month} />
      <SaleThisMonthChart data={sale?.total_sale_this_Month} />
    </div>
  );
}
