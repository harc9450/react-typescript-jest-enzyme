import { ICommandBarItemProps, ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export interface ICommandBarActionProps {
    onPublishAllCustomizations: () => void;
    onExportToExcel: () => void;
}


export function commandBarProps(props: ICommandBarActionProps): ICommandBarProps {

    return {
        farItems: bindCommandbarFarItems(),
        items: bindCommandbarItems(props),
        overflowItems: bindCommandbarOverflowItems()
    };
}

function bindCommandbarItems(props: ICommandBarActionProps): ICommandBarItemProps[] {
    const items: ICommandBarItemProps[] = [
        {
            iconProps: { iconName: "Add" },
            key: "item1",
            name: "New",
            onClick: () => { alert("Hello"); }
        },
        {
            iconProps: { iconName: "ExcelLogo" },
            key: "item2",
            name: "Export To Excel",
            onClick: props.onExportToExcel
        },
        {
            iconProps: { iconName: "PublisherLogo" },
            key: "item3",
            name: "Publish all customization",
            onClick: props.onPublishAllCustomizations
        }
    ];

    return items;
}

function bindCommandbarOverflowItems(): ICommandBarItemProps[] {
    const items: ICommandBarItemProps[] = [
        {
            iconProps: { iconName: "MoveToFolder" },
            key: "item1",
            name: "Move to..."
        },
        {
            iconProps: { iconName: "Copy" },
            key: "item2",
            name: "Copy to..."
        },
        {
            iconProps: { iconName: "Edit" },
            key: "item3",
            name: "Rename..."
        }
    ];

    return items;
}

function bindCommandbarFarItems(): ICommandBarItemProps[] {
    const items: ICommandBarItemProps[] = [
        {
            iconProps: { iconName: "SortLines" },
            key: "item1",
            name: "Sort"
        },
        {
            iconProps: { iconName: "LargeGrid" },
            key: "item2",
        },
        {
            iconProps: { iconName: "Info" },
            key: "item3"
        }
    ];

    return items;
}

export default commandBarProps;