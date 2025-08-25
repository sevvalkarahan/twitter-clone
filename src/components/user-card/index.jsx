import Button from "../button";
import { useState } from "react";

export default function UserCard({ user }) {

    const [following, setFollowing] = useState(false)

    return (
        <div className="py-3 px-4 flex gap-3 transition-colors cursor-pointer">
            <div className="flex-1 flex gap-3">
                <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                <div className="w-[calc(100%-3.25rem)] text-left">
                    <div className="leading-5 text-[#e7e9ea] font-bold truncate">
                        {user.fullName}
                    </div>
                    <div className="text-[#71767b] truncate">@{user.username}</div>
                </div>
            </div>
            <div>
                {following ? (
                    <Button

                        size="small"
                        onClick={() => setFollowing(false)}
                        className="whitespace-nowrap group"
                    >
                        <div className="w-full rounded-full px-4 h-8 text-center font-bold items-center flex group-hover:hidden bg-[#eff3f4] text-[#0f1419]">Takip ediliyor</div>
                        <div className="w-full rounded-full px-4 h-8 text-center font-bold items-center hidden group-hover:flex bg-[#eff3f4] text-[#0f1419]">Takibi bırak</div>
                    </Button>
                ) : (
                    <Button size="small" onClick={() => setFollowing(true)}>
                        Takip et
                    </Button>
                )}
            </div>
        </div>
    )
}