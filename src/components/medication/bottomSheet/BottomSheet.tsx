import React from "react";
import { MdiTrash } from "../../svg/common/Common";
import InputField from "../../common/inputField/InputField";
import Counter from "../counter/Counter";
import {MdiRename, PhMinusFill, PhPlusFill} from "../../svg/medication/Medication";
import MedicationWeek from "../medWeekend/MedicationWeek";
import TimePicker from "../timePicker/TimePicker";
import Reminder from "../reminder/Reminder";
import Button, {ButtonState} from "../../common/button/Button";

const ReminderOptions = [
    { label: "Half an hour before", checked: true },
    { label: "An hour before", checked: true },
    { label: "Two hours before", checked: false },
    { label: "Three hours before", checked: true },
    { label: "A day before", checked: false },
];

const BottomSheet = () => (
    <div className="px-[24px] pt-[12px] pb-[32px] bg-white flex flex-col items-start rounded-t-[30px]">
        <div className="self-end">
            {React.cloneElement(<MdiTrash />, { className: `text-alert-500`, width: '24', height: '24' })}
        </div>
        <div className="w-[357px] h-[660px] flex flex-col justify-between">
            <Section title="Name of medication">
                <InputField icon={<MdiRename />} label="Medicine" />
            </Section>
            <div className="w-full flex justify-between">
                <CounterSection title="Doses" />
                <CounterSection title="Stock" />
            </div>
            <Section title="Days">
                <MedicationWeek days={[
                    { title: "Mo", variant: "active" }, { title: "Tu", variant: "disable" },
                    { title: "We", variant: "active" }, { title: "Th", variant: "disable" },
                    { title: "Fr", variant: "active" }, { title: "Sa", variant: "disable" },
                    { title: "Su", variant: "disable" }
                ]} />
            </Section>
            <Section title="Time">
                <TimePicker />
            </Section>
            <Section title="Reminder">
                <Reminder options={ReminderOptions} />
            </Section>
            <SaveButton label="Save" state="default" />
        </div>
    </div>
);

const BottomSheetReminderOnly = () => (
    <div className="px-[24px] pt-[12px] pb-[32px] bg-white flex flex-col items-start rounded-t-[30px]">
        <div className="w-[357px] h-[303px] flex flex-col justify-between">
            <div className="self-end">
                {React.cloneElement(<MdiTrash />, { className: `text-scale-100`, width: '24', height: '24' })}
            </div>
            <div className="w-[357px] h-[660px] flex flex-col justify-between">
                <Section title="Reminder">
                    <Reminder options={ReminderOptions} />
                </Section>
                <SaveButton label="Cancel" state="destructive" />
            </div>
        </div>
    </div>
);

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className="w-full">
        <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">{title}</p>
        {children}
    </div>
);

interface CounterSectionProps {
    title: string;
}

const CounterSection: React.FC<CounterSectionProps> = ({ title }) => (
    <div className="w-[120px] h-[84px] flex flex-col items-start justify-center rounded-lg">
        <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">{title}</p>
        <Counter plusIcon={<PhPlusFill />} minusIcon={<PhMinusFill />} />
    </div>
);

interface SaveButtonProps {
    label: string;
    state: ButtonState;
}

const SaveButton: React.FC<SaveButtonProps> = ({ label, state }) => (
    <div className="w-full">
        <Button variant="filled" state={state} size="large" label={label} width="w-full" />
    </div>
);

export { BottomSheet, BottomSheetReminderOnly };