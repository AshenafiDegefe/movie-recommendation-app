
const StatusMessage: React.FC<StatusMessageProps> = ({ loading, error, movieCount }) => {
    if (loading) {
        return <span className="text-sky-400">Loading recommendations...</span>;
    }

    if (error) {
        // We must use dangerouslySetInnerHTML here because the error string contains HTML tags for styling
        return <div className="text-red-500" dangerouslySetInnerHTML={{__html: error}} />;
    }

    if (movieCount > 0) {
        return <span className="text-green-400">{movieCount} recommendations loaded!</span>;
    }

    return null;
};
export default StatusMessage;