import React, {useState} from 'react';
import Header from '../components/layout/header/Header';
import ProgressFrame from '../components/progress/frame/ProgressFrame';
import ProgressButton from '../components/progress/button/ProgressButton';
import NavBar from '../components/layout/navbar/Navbar'
import { IcRoundHome } from '../components/svg/navbar/Home';
import { TablerPillFilled } from '../components/svg/navbar/Pill';
import { MdiProgressStar, MynauiCalendar } from '../components/svg/navbar/Calendar';
import { MdiLightHeart } from '../components/svg/navbar/Heart';
import {OnfireBadge} from "../components/svg/badge/OnfireBadge";
import {HydratedBadge} from "../components/svg/badge/HydratedBadge";
import {TravelerBadge} from "../components/svg/badge/TravelerBadge";

const progressData = {
    text: "5",
    progress: 20,
    tag: "You are level 5!",
    subtag: "150 points to level up",
    isBadge: true,
};

const navPages = [
    { icon: <IcRoundHome /> },
    { icon: <TablerPillFilled /> },
    { icon: <MynauiCalendar /> },
    { icon: <MdiLightHeart /> },
    { icon: <MdiProgressStar /> },
];

const Progress: React.FC = () => {

    const [isBadge, setIsBadge] = useState(true);

    const toggleBadgeState = () => {
        setIsBadge(!isBadge);

    };
    return (
        <div className="flex flex-col items-center justify-between bg-scale-400 rounded-[53px] w-[393px] h-[852px]">

            <Header comp={null} name={"progress"} title={"Progress"} />

            <main className="flex-grow flex flex-col items-center justify-start">
                <section className="pb-3" onClick={toggleBadgeState}>
                    <ProgressFrame {...progressData} />
                </section>

                {isBadge ? (
                    <>
                        <section className="pb-3">
                            <ProgressButton
                                text="MEDITATE"
                                textColor="text-scale-1000"
                                unfilledColor="bg-scale-100"
                                filledColor="bg-primary-800"
                                timeText="0:10"
                            />
                        </section>

                        <section className="pb-3">
                            <ProgressButton
                                text="DRINK WATER"
                                textColor="text-scale-1000"
                                unfilledColor="bg-scale-100"
                                filledColor="bg-primary-800"
                                oneClick
                                displayText="2L"
                            />
                        </section>
                    </>
                ) : (
                    <section className="pb-3">
                        <div className="flex flex-wrap gap-6 p-2 justify-center">
                            <OnfireBadge/>
                            <TravelerBadge/>
                            <HydratedBadge/>
                            <OnfireBadge/>
                            <TravelerBadge/>
                            <HydratedBadge/>
                        </div>
                    </section>

                )}
            </main>

            <NavBar pages={navPages}/>
        </div>
    );
};

export default Progress;
