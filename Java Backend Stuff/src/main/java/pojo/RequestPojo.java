package pojo;

public class RequestPojo {
	private int requestId;
	private int managerId;
	private int employeeId;
	private double requestAmount;
	private String requestDescription;
	private String requestStatus;
	@Override
	public String toString() {
		return "RequestPojo [requestId=" + requestId + ", managerId=" + managerId + ", employeeId=" + employeeId
				+ ", requestAmount=" + requestAmount + ", requestDescription=" + requestDescription + ", requestStatus="
				+ requestStatus + "]";
	}
	public RequestPojo(int requestId, int managerId, int employeeId, double requestAmount, String requestDescription,
			String requestStatus) {
		super();
		this.requestId = requestId;
		this.managerId = managerId;
		this.employeeId = employeeId;
		this.requestAmount = requestAmount;
		this.requestDescription = requestDescription;
		this.requestStatus = requestStatus;
	}
	public RequestPojo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public int getManagerId() {
		return managerId;
	}
	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public double getRequestAmount() {
		return requestAmount;
	}
	public void setRequestAmount(double requestAmount) {
		this.requestAmount = requestAmount;
	}
	public String getRequestDescription() {
		return requestDescription;
	}
	public void setRequestDescription(String requestDescription) {
		this.requestDescription = requestDescription;
	}
	public String getRequestStatus() {
		return requestStatus;
	}
	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}
	

}
