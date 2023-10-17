import formatDate from "@/utils/formatDate";

const StatusTimeline = ({ updates = [] }) => (
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 px-4">
    {updates.map((status: any) => (
      <div className="bg-green-500 border border-gray-400 p-4 rounded w-full h-full flex flex-col justify-between">
        <div className="mb-2 text-xs leading-5">{status.description}</div>

        <div className="border-t text-gray-100 border-t border-gray-400 text-xs pt-2">
          {formatDate(status.created_at)}
        </div>
      </div>
    ))}
  </div>
);

export default StatusTimeline;
