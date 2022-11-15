package org.bank.honey;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
class Bank {
public String name;
  @Id
  private String id;
  @Indexed(unique = true)
  private String nameAuthor;
  private int sum;
  private CardAuthor card;

  public Bank(String name, String nameAuthor, int sum, CardAuthor card) {
    this.name = name;
    this.nameAuthor = nameAuthor; this.sum = sum; this.card = card;
    }
}
