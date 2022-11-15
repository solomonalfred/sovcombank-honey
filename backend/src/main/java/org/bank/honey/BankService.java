package org.bank.honey;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class BankService {
  private final BankRepository bankRepository;

  public List<Bank> getAllBanks() {
    return bankRepository.findAll();
  }
}
