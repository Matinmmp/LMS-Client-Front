'use client'
import { Avatar } from "@nextui-org/avatar";
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const { user, loading } = useSelector((state: any) => state.auth)

    return (
        <div className="w-full">
            <div className="h-24 w-24 lg:h-32 lg:w-32 xl:w-40 xl:h-40 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2  ">
                <Avatar className="h-full w-full shadow-[0_0_15px_0_#42C0F4]" size="lg" radius="full"
                    isBordered color="secondary" src={user?.avatar?.imageUrl} showFallback />
            </div>
        </div>
    );
}
