import React from "react";
import { MdiTrash } from "../../svg/common/Common";
import InputField from "../../common/InputField";
import Counter from "../counter/Counter";
import { PhMinusFill, PhPlusFill } from "../../svg/medication/Medication";
import MedicationWeek from "../medWeekend/MedicationWeek";
import TimePicker from "../../timePicker/TimePicker";
import Reminder from "../../common/Reminder";
import Button from "../../common/Button";

const BottomSheet = () => {
    return (
        <div className="w-[405px] h-[734px] px-[24px] pt-[12px] pb-[32px] bg-white flex flex-col items-start rounded-t-[30px]">
            {/* Top-right Trash Icon */}
            <div className="self-end">
                {React.cloneElement(<MdiTrash />, { className: `text-alert-500`, width: '24', height: '24' })}
            </div>

            {/* New Container Div with Specific Dimensions */}
            <div className="w-[357px] h-[660px] flex flex-col justify-between">
                <div className="w-full">
                    <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">Name of medication</p>
                    <InputField icon={<MdiTrash/>} label={"Medicine"}/>
                </div>

                <div className="w-full flex justify-between">
                    <div className="w-[120px] h-[84px] flex flex-col items-start justify-center rounded-lg">
                        <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">Doses</p>
                        <Counter plusIcon={<PhPlusFill/>} minusIcon={<PhMinusFill/>}/>
                    </div>
                    <div className="w-[120px] h-[84px] flex flex-col items-start justify-center rounded-lg">
                        <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">Stock</p>
                        <Counter plusIcon={<PhPlusFill/>} minusIcon={<PhMinusFill/>}/>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">Days</p>
                    <MedicationWeek days={[{title: "Mo", variant: "active"}, {title: "Tu", variant: "disable"}, {
                        title: "We",
                        variant: "active"
                    }, {title: "Th", variant: "disable"}, {title: "Fr", variant: "active"}, {
                        title: "Sa",
                        variant: "disable"
                    }, {title: "Su", variant: "disable"}]}/>
                </div>

                <div className="w-full">
                    <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">Time</p>
                    <TimePicker/>
                </div>

                <div className="w-full">
                    <p className="text-scale-1000 font-sans text-title2 font-bold mb-2">Reminder</p>
                    <Reminder options={[
                        {label: "Half an hour before", checked: true},
                        {label: "An hour before", checked: true},
                        {label: "Two hours before", checked: false},
                        {label: "Three hours before", checked: true},
                        {label: "A day before", checked: false},
                    ]}/>
                </div>

                <div className="w-full">
                    <Button
                        variant="filled"
                        state="default"
                        size="large"
                        label="Save"
                        width="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default BottomSheet;
