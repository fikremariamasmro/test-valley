import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import BannerSlider from "@/components/banner/BannerSlider";


export default function WebLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Header />
            <BannerSlider />
            {children}
        </>
    );
}
