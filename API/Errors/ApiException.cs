namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string meassage = null, string details = null) : base(statusCode, meassage)
        {
            Details = details;
        }
        public string Details { get; set; }
    }
}