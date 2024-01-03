'use client'
import {useState} from "react";

export function CustomFileInput({ onFileChange } : any) {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e : any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            // onFileChange(selectedFile);
        }
    };
    return (
        <div className="flex flex-col">
            <label htmlFor="fileInput" className="bg-green-500 w-1/4 text-center text-white py-2 px-4 rounded cursor-pointer">
                Choose File
            </label>
            <input
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={handleFileChange}
                id="fileInput"
                className="hidden"
            />
            {file && <p className="mt-2">Selected File: {file.name}</p>}
        </div>
    );
}