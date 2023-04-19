import React from "react";
import styles from "./Pricing.module.css";
import Button from "../Buttons/Button";

export default function Pricing() {
  return (
    <>
      <div className={styles.container_pricing}>
        <div className={styles.daypass_price}>
          <div className={styles.inner1_pricing}>
            <h2>Day Pass</h2>
            <h1>$20</h1>
            <h4>/Pass</h4>
          </div>
          <div className={styles.inner2_pricing}>
            <p>1 Day Pass</p>
            <p>Free Gym Access</p>
            <p>24 hour Access</p>
          </div>
          <div className={styles.inner3_pricing}>
            <Button buttonName="Get started" />
          </div>
        </div>

        <div className={styles.daypass_month_to_month}>
          <div className={styles.inner1_month}>
            <h2>Month To Month</h2>
            <h1>$90</h1>
            <h4>/Month</h4>
            <h2>Day Pass</h2>
          </div>
          <div className={styles.inner2_month}>
            <p>$99 Joining Fee</p>
            <p>No Contact</p>
            <p>Free Gym Access</p>
            <p>1 Group Class Included</p>
            <p>24 hour Access</p>
          </div>
          <div className={styles.inner3_month}>
            <Button buttonName="Get started" />
          </div>
        </div>
        <div className={styles.daypass_membership}>
         <div className={styles.inner1_membership}>
          <h1>Membership</h1>
         </div>
         <div className={styles.inner2_membership}>
          <strong>From Punch Pass to Monthly or Annual</strong>
         </div>
         <div className={styles.inner3_membership}>
          <p>At Gym Base,we offer a wide range of membership with options to suit every budget .Everything from One Day Pass. Punch Pass to monthly or annual prepaid memberships What's more ,we won't tie you in to a long term contract .giving you greater flexibility</p>
         </div>
         <div className={styles.inner4_membership}>
          <strong>Each Plan Included</strong>
         </div>
         <div className={styles.inner5_membership}>
          <p>The best equipment global brands</p>
          <p>The gym open 24 hours a day, 7 days week</p>
          <p>Two safe payment methods</p>
          <p>Group fitness classes in the price of the subscription</p>
          <p>No long-term contract,period</p>
         </div>
        </div>
      </div>
    </>
  );
}
