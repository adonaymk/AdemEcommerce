namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string meassage = null)
        {
            StatusCode = statusCode;
            Meassage = meassage ?? GetDefaultMessaggeForStatusCode(statusCode);//if it null always take the vale next to ??
        }

        public int StatusCode { get; set; }
        public string Meassage { get; set; }
        private string GetDefaultMessaggeForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you havve made",
                401 => "Authorized, you are not",
                404 => "Resource found, it was not",
                500 => "Errors are the path of the dark side.",
                _ => null // default value is underscore 
            };
        }


    }
}