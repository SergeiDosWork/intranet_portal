package ru.sergeidos.intranet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.sergeidos.intranet.dao.MyUserDAO;
import ru.sergeidos.intranet.domain.MyUser;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    public MyUserDAO myUserDAO;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        MyUser myUser = myUserDAO.getUser(userName);
        return myUser;
    }


}
