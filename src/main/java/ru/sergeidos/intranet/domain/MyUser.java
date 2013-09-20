package ru.sergeidos.intranet.domain;

import org.apache.log4j.Logger;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.Date;

public class MyUser extends org.springframework.security.core.userdetails.User {

    private static final Logger logger = Logger.getLogger(MyUser.class);

    private String firstName;
    private String lastName;
    private String middleName;
    private Date birthDate;
    private String nickname;
    private Date dateGetAJob;
    private String department;
    private String userRang;
    private String userCarma;
    private String userScol;


    public MyUser(String username, String password, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired,
           boolean accountNonLocked, Collection<GrantedAuthority> authorities,
           long id,
           String firstName,
           String lastName,
           String middleName,
           Date birthDate,
           String nickname,
           Date dateGetAJob,
           String department,
           String userRang,
           String userCarma,
           String userScol
    ) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        logger.debug("!Create user "+toString());
        this.firstName = firstName;
    }

    public String getFirstName() {
        return firstName;
    }

    public static Logger getLogger() {
        return logger;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public String getNickname() {
        return nickname;
    }

    public Date getDateGetAJob() {
        return dateGetAJob;
    }

    public String getDepartment() {
        return department;
    }

    public String getUserRang() {
        return userRang;
    }

    public String getUserCarma() {
        return userCarma;
    }

    public String getUserScol() {
        return userScol;
    }

    @Override
    public String toString() {
        return "MyUser{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", birthDate=" + birthDate +
                ", nickname='" + nickname + '\'' +
                ", dateGetAJob=" + dateGetAJob +
                ", department='" + department + '\'' +
                ", userRang='" + userRang + '\'' +
                ", userCarma='" + userCarma + '\'' +
                ", userScol='" + userScol + '\'' +
                '}';
    }

    public String getUserNickname() {
        String result = "";
        if (nickname!=null && nickname.length()==0) {
            result = nickname;
        } else
        {
            if (firstName!=null && firstName.length()>0) {
                result = firstName;
            }
            if (lastName!=null && lastName.length()>0) {
                result = lastName + (result.length()>0?" ":"") + result;
            }
            if (result.length()==0) {
                result = this.getUsername();
            }
        }
        return result;
    }
}
