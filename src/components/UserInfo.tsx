export default function UserInfo() {
    return (
        <div className="flex flex-col items-center gap-4 mb-12 mt-6">
            <img
                src="https://picsum.photos/200"
                alt="User Avatar"
                className="w-16 h-16 rounded-full"
            />
            <div>
                <h2 className="text-lg font-semibold">Lucas Rocha</h2>
            </div>
        </div>
    );
}
