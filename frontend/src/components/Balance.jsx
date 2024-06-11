export function Balance({ value }) {
    return <div className="flex">
        <div className="ml-4 mr-4 font-bold text-lg">
            Your balance
        </div>
        <div className="text-lg font-semibold">
            Rs. {value}
        </div>
    </div>
}