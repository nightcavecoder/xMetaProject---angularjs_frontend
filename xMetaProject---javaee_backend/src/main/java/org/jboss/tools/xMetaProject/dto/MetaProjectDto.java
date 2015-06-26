package org.jboss.tools.xMetaProject.dto;

public class MetaProjectDto {
	private String title;
	private String courseOfStudies;
	private String semester;
	private String leader;
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
	public String getLeader() {
		return leader;
	}
	public void setLeader(String leader) {
		this.leader = leader;
	}
}
