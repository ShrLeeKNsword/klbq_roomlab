import RandomBox from "@/component/random_box";
import CataBox from "@/component/catalogry_list";

export default function MainPage() {
    return (
        <div className="h-full w-screen pt-10 overflow-y-scroll overflow-x-hidden grid grid-cols-1 place-content-between" style={{minWidth:"700px",minHeight:"700px"}}>
            <div className="text-3xl font-bold pt-4 w-full h-max flex content-center justify-center">卡拉彼丘自建房开房助手</div>
            <RandomBox />
            <CataBox />
        </div>
    );
}