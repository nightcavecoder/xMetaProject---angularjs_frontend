package org.jboss.tools.xMetaProject.dto;

public class MetaProjectDto {
	
	
	private Long id;
	private String title;
	private String courseOfStudies;
	private String semester;
	private UserDto leader;
	
	public void setLeader(UserDto leader) {
		this.leader = leader;
	}
	public UserDto getLeader() {
		return leader;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCourseOfStudies() {
		return courseOfStudies;
	}
	public void setCourseOfStudies(String courseOfStudies) {
		this.courseOfStudies = courseOfStudies;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

}
