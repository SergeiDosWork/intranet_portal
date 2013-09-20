package ru.sergeidos.intranet.dao;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.stereotype.Service;
import ru.sergeidos.intranet.domain.MyUser;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

@Service
public class MyUserDAO {

    @Autowired
    DataSource dataSource;

    private static final Logger logger = Logger.getLogger(MyUserDAO.class);

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    Collection<GrantedAuthority> getAuthority(String aut){
        Collection<GrantedAuthority> res = new ArrayList<GrantedAuthority>();
        res.add(new GrantedAuthorityImpl("ROLE_USER"));
        if (aut.equals("ROLE_ADMIN"))
            res.add(new GrantedAuthorityImpl("ROLE_ADMIN"));
        return res;
    }



    public MyUser getUser(String username) {
        MyUser myUser;
        String sql = "SELECT * from users where email = ?";
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        myUser = (MyUser) jdbcTemplate.queryForObject(sql,new Object[] {username},new MyUserRowMapper());
        return myUser;
    }

    public class MyUserRowMapper implements RowMapper{
        public  Object mapRow(ResultSet resultSet, int rowNum) throws  SQLException {

            MyUser myUser = new MyUser(
                    resultSet.getString("email"),
                    resultSet.getString("password"),
                    resultSet.getBoolean("enabled"),
                    true,true,true, getAuthority(resultSet.getString("authority")),
                    resultSet.getLong("id"),
                    resultSet.getString("firstname"),
                    resultSet.getString("lastname"),
                    resultSet.getString("middlename"),
                    resultSet.getDate("birthdate"),
                    resultSet.getString("nickname"),
                    resultSet.getDate("dategetajob"),
                    resultSet.getString("department"),
                    resultSet.getString("userrang"),
                    resultSet.getString("usercarma"),
                    resultSet.getString("userscol")
            );
            return  myUser;
        }
    }




}
