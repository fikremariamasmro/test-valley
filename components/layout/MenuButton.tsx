function MenuButton() {
    return (<>
        <div className="cursor-pointer flex-row hidden md:flex">
            <div className="space-y-1 pl-3 pt-3 pr-2">
                {[0, 1, 2].map((i) => <span key={i} className="block font-bold ti w-3 h-[1px] bg-brand-primary"></span>)}
            </div>

            <div className="text-brand-primary text-md pt-1">카테고리</div>
        </div>
    </>);
}

export default MenuButton;