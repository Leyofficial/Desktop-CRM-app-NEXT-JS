export type PropCustomInput = {
    label: string,
    placeholder?: string,
    width?: string | number,
    required? : boolean
}

export function CustomInput({label, placeholder, width = '100' , required}: PropCustomInput) {
    return (
        <div className={`flex flex-col items-start gap-2`}>
            <div  className="text-sky-950 text-base font-bold font-['Inter'] leading-[30px]">
                {label}
            </div>
            <div style={{width : width}}>
                <input
                    required={required}
                    type={'text'}
                    style={{width : width}}
                    placeholder={placeholder}
                    className={`px-5 py-2.5 bg-slate-50 rounded-lg border border-slate-200 justify-center items-center gap-3 inline-flex`}
                />
            </div>
        </div>

    )
}