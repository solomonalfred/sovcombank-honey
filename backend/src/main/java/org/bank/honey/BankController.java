package org.bank.honey;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/bank")
@AllArgsConstructor
public class BankController {
  private final BankService bankService;

  @GetMapping
  public List<Bank> fetchAllBank() {
    return bankService.getAllBanks();
  }
}
