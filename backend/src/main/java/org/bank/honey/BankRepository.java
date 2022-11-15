package org.bank.honey;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BankRepository extends MongoRepository<Bank, String> {
  Optional<Bank> findBankByNameAuthor(String name);
}
