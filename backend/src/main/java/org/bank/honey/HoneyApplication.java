package org.bank.honey;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@SpringBootApplication
public class HoneyApplication {
  public static void main(String[] args) {
    SpringApplication.run(HoneyApplication.class, args);
  }

  @Bean
  CommandLineRunner runner(BankRepository repository, MongoTemplate mongo) {
    return args -> {
      var nameAuthor = "Oleg";
      var card = new CardAuthor("Russia", "01928", "1924", "08/19 1999");
      Bank bank = new Bank("Tinkoff", nameAuthor, 100, card);

      repository.findBankByNameAuthor(nameAuthor)
          .ifPresentOrElse(s
              -> { System.out.println(s + " alredy exists"); },
              () -> { repository.insert(bank); });

      // var query = new Query();
      // query.addCriteria(Criteria.where("nameAuthor").is(nameAuthor));

      // List<Bank> banks = mongo.find(query, Bank.class);

      // if (banks.size() > 1) {
      //   throw new IllegalStateException("Found many banks with single name author" + nameAuthor);
      // }

      // if (banks.isEmpty()) {
      //   repository.insert(bank);
      // }
    };
  }
}
