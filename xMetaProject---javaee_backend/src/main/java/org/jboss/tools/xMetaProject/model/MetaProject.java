package org.jboss.tools.xMetaProject.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import org.jboss.tools.xMetaProject.model.User;


import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class MetaProject implements Serializable
{
   /** Default value included to remove warning. Remove or modify at will. **/
   private static final long serialVersionUID = 1L;

   @Id
   @GeneratedValue
   private Long id;

   @NotNull
   private String title;

   private String courseOfStudies;

   private String semester;

   @ManyToOne
//   @JoinColumn(name="id")
   private User leader;
   

   public Long getId()
   {
      return id;
   }

   public String getTitle()
   {
      return title;
   }

   public void setTitle(String title)
   {
      this.title = title;
   }

   public String getCourseOfStudies()
   {
      return courseOfStudies;
   }

   public void setCourseOfStudies(String courseOfStudies)
   {
      this.courseOfStudies = courseOfStudies;
   }

   public String getSemester()
   {
      return semester;
   }

   public void setSemester(String semester)
   {
      this.semester = semester;
   }

   public User getLeader()
   {
      return leader;
   }

   public void setLeader(User leader)
   {
      this.leader = leader;
   }

   public static long getSerialversionuid()
   {
      return serialVersionUID;
   }

   public void setId(Long id)
   {
      this.id = id;
   }

}