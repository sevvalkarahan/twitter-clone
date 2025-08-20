import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hook"
import { setCurrentAccount } from "../../../../../store/auth/actions";

export default function More({ close }) {
    const currentAccount = useAccount()
    const accounts = useAccounts();


    return (
        <div>
            {accounts.map((account) => (
                <button type="button"
                    key={account.id}
                    disabled={currentAccount.id == account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                        close()
                    }}
                    className={classNames("py-3 px-4 rounded-full transition-colors w-full flex text-left outline-none", {
                        "hover:bg-[#eff3f41a]": currentAccount.id !== account.id
                    })}>
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 text-[15px] ">
                        <h6 className="font-bold">{account.fullname}</h6>
                        <div className=" text-[15px] text-[#71767b] ">
                            @{account.username}
                        </div>
                    </div>
                </button>
            ))}
            <div className="h-px bg-[#2f3336 my-3] "></div>
            <button className="py-3 px-4 text-left transition-colors gover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold cursor-pointer">Var olan bir hesap ekle</button>
            <button className="py-3 px-4 text-left transition-colors gover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold cursor-pointer">Hesapları yönet</button>
            <button className="py-3 px-4 text-left transition-colors gover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold cursor-pointer">Var olan bir hesap ekle</button>
        </div>
    )
}