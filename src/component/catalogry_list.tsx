import CataBtn from "@/component/catabtn";

const CataData = [
    {
        btnname: "躲猫猫",
        link: "/躲猫猫",
        img: null
    }, {
        btnname: "火力全开",
        link: "/火力全开",
        img: null
    }, {
        btnname: "起床战争",
        link: "/起床战争",
        img: null
    }, {
        btnname: "刀战",
        link: "/刀战",
        img: null
    }, {
        btnname: "跑酷",
        link: "/跑酷",
        img: null
    }, {
        btnname: "塔防",
        link: "/塔防",
        img: null
    }, {
        btnname: "BOSS战",
        link: "/BOSS战",
        img: null
    }, {
        btnname: "中门对狙",
        link: "/躲猫猫",
        img: null
    }, {
        btnname: "谁是卧底",
        link: "/谁是卧底",
        img: null
    }, {
        btnname: "弹琴房",
        link: "/弹琴房",
        img: null
    }, {
        btnname: "赛事房间",
        link: "/赛事房间",
        img: null
    }, {
        btnname: "其他玩法",
        link: "/其他玩法",
        img: null
    },
]

export default function CataBox() {
    return (
        <div className="w-full h-full px-14 pt-24">
            <div className="text-2xl font-bold w-full h-max my-8 flex content-center justify-center">类别检索</div>
            <div className="h-max grid gap-4 grid-cols-4 grid-rows-3 py-4 justify-items-center mx-auto w-11/12">
                {CataData.map((item, index) => (
                    <CataBtn key={index} btnname={item.btnname} link={item.link} img={item.img} />
                ))}
            </div>
        </div>
    );
}

