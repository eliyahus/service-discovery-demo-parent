import React from 'react';
import ScreenWrapper from "../../components/screenWrapper";
import {checkBalance} from "../../../models/API";
import LoadingPopup from "../../components/loadingPopup";
import CardWrapper from "../../components/cardWrapper";
import styles from "./balanceScreen.module.css"
function BalanceScreen() {

    const [balance, setBalance] = React.useState()
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        checkBalance().then(value => {
            setBalance(value);
            setIsLoading(false)
        })
    }, [])

    return (
        <ScreenWrapper className={`flexCenter`}>
            {isLoading ? <LoadingPopup/> :
                <CardWrapper className={styles.content}>
                    <h6>You're current balance is:</h6>
                    <p>
                    {/*add up/down arrow icon */}
                    <h3 className={balance>=0?styles.money_plus:styles.money_minus}>{balance}$</h3>
                    </p>
                </CardWrapper>}
        </ScreenWrapper>
    );


}

export default BalanceScreen;