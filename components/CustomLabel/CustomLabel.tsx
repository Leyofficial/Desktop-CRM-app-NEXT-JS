export function CustomLabel({label, value, width = '100%'}: { label: string, value?: string, width?: string }) {
    return (
        <div style={{width: width}} className={` flex flex-col items-start gap-2`}>
            <div className="text-sky-950 text-base font-bold font-['Inter'] leading-[30px]">
                {label}
            </div>
            <div
                style={{width: width}}
                className={`px-5 py-2.5 h-12 bg-slate-50 rounded-lg border border-slate-200  gap-3 inline-flex`}
            >{value}</div>
        </div>
    )
}