import Button from "../../../../components/button";

export default function Premium() {
    return (
        <section
            className="bg-black mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-[12px]"
        >
            <h6 className="text-xl leading-6 font-bold">Premium'a Abone Ol</h6>
            <p className="leading-5 ">
                Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam gelir payı kazan.
            </p>
            <div className="self-start">
                <Button size={"normal"}>Abone ol</Button>
            </div>
        </section>
    )
}