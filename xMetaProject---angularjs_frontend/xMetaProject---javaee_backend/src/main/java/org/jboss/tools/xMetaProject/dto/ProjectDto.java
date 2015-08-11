package org.jboss.tools.xMetaProject.dto;

import java.util.Collection;
import java.util.List;

import org.jboss.tools.xMetaProject.model.User;

public class ProjectDto {
	private Long id;
	private String title;
	private String description;
	private Long metaprojectid;
	private String metaprojectname;
	private Collection<UserDto> members;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getMetaprojectid() {
		return metaprojectid;
	}
	public void setMetaprojectid(Long long1) {
		this.metaprojectid = long1;
	}
	public String getMetaprojectname() {
		return metaprojectname;
	}
	public void setMetaprojectname(String metaprojectname) {
		this.metaprojectname = metaprojectname;
	}
	public Collection<UserDto> getMembers() {
		return members;
	}
	public void setMembers(Collection<UserDto> collection) {
		this.members = collection;
	}
	
}
