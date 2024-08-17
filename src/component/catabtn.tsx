"use client"

import Image from "next/image";

interface CataBtnProps {
    btnname: string;
    link: string;
    img?: string | null | undefined;
}

export default function CataBtn(CataBtnData: CataBtnProps) {
    return (
        <div id={"cata_btn_" + CataBtnData.btnname} className="h-12 xl:w-60 lg:w-48 md:w-40 bg-slate-400 rounded-md flex shadow-slate-50 drop-shadow-sm" onClick={() => open(CataBtnData.link, '_blank')}>
            <div className="Absolute  bg-slate-100 h-full w-full"></div>
            <div className="w-40 h-max m-auto text-right mx-2 text-white overflow-x-hidden text-lg">{CataBtnData.btnname}</div>
            {CataBtnData.img != undefined || CataBtnData.img != null ? <Image className="w-full h-full" src={CataBtnData.img} alt=""></Image> : <></>}
        </div>
    );
}

