export default function RoomChild() {
    return (
        <div className="h-44 w-52 rounded-md bg-slate-300">
            <div className="relative flex top-36 rounded-b-lg w-full h-10 bg-slate-200 justify-between">
                <div className="p-2 font-light text-sm">房间代码</div>
                <div className="p-2 font-light text-sm">代码号</div>
            </div>
            <div className="relative flex top-16 rounded-b-lg h-10 justify-between">
                <div className="p-2 font-light text-sm">模式类</div>
                <div className="p-2 font-light text-sm">模式名</div>
            </div>
        </div>

    );
}