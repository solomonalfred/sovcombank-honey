package org.bank.honey;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CardAuthor {
  private String country;
  private String code;
  private String cvc;
  private String dateCreate;
}
