import RoomChild from "@/component/room_child";

export default function RandomBox() {
    return (
        <div className="w-full pt-14 px-14">
            {/*<div className="text-xl font-bold w-full h-min flex content-center justify-center">随机推荐</div>*/}
            <div className="h-max grid gap-6 xl:grid-cols-5 lg:grid-cols-3 w-11/12 sm:grid-cols-2 xl:grid-rows-1 lg:grid-rows-2 sm:grid-rows-2 pt-4 justify-items-center mx-auto">
                <div><RoomChild /></div>
                <div><RoomChild /></div>
                <div><RoomChild /></div>
                <div><RoomChild /></div>
                <div><RoomChild /></div>
            </div>
        </div>
    );
}

