package ru.sergeidos.intranet.controller;

import java.net.Authenticator;
import java.security.Principal;
import java.util.logging.Logger;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.sergeidos.intranet.domain.MyUser;

@Controller
public class HomeController {

    private static final org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(HomeController.class);

	@RequestMapping(value="/")
	public String test(ModelMap model) {
        String youname ="";
        final Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal!=null) {
            if (principal instanceof MyUser) {
                MyUser myUser = (MyUser) principal;
                youname = myUser.getUserNickname();
                model.addAttribute("logined",true);
            } else
            model.addAttribute("logined",false);
        } else
            model.addAttribute("logined",false);
        model.addAttribute("username",youname);
		return "home";
	}

    @RequestMapping(value = "/secret")
    public String secret(ModelMap model, Principal principal) {
        return "secret";
    }

    @RequestMapping(value = "/mustlogon")
    public String mustlogon(ModelMap model, Principal principal) {
        return "mustlogon";
    }
}
