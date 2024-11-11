import React from "react";
import { OnfireBadge } from "../svg/badge/OnfireBadge";
import {TravelerBadge} from "../svg/badge/TravelerBadge";
import {HydratedBadge} from "../svg/badge/HydratedBadge";
import {EmptyBadge} from "../svg/badge/EmptyBadge";


const BadgeVariants = {
    default: <EmptyBadge />,
    onfire: <OnfireBadge />,
    traveler: <TravelerBadge />,
    hydrated: <HydratedBadge />,
};

type BadgeVariantsType = keyof typeof BadgeVariants;

interface BadgeProps {
    variant: BadgeVariantsType;
}

const Badge: React.FC<BadgeProps> = ({ variant }) => {
    return React.cloneElement(BadgeVariants[variant]);
}

export default Badge;
