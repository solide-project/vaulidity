import { Icon } from '@iconify/react';

interface InformationTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: string;
    title: string
}

export const InformationTitle = ({
    icon,
    title,
}: InformationTitleProps) => {
    return <div className="flex space-x-2 my-4">
        {icon && <Icon icon={icon} className="text-primary h-8 w-8" />}
        <div className="text-2xl font-extrabold">{title}</div>
    </div>
}