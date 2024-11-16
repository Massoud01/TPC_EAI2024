# Email Queue System

This project demonstrates a simple email queue system using RabbitMQ. It consists of two main components: a producer and a worker. The producer sends email messages to a queue, and the worker processes these messages.

## Prerequisites

- Node.js
- RabbitMQ

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Make sure RabbitMQ is running on your local machine.

## Usage

### Producer

The producer sends email messages to the `emailQueue`.

To run the producer:
```sh
node [producer.js](http://_vscodecontentref_/1)

![Email Queue in Rabbitmq when workers are not running](C:\Users\User\Desktop\Troisième[2024-2025]\Troisième Semestre I [2024-2025]\Intégration des applications d'entreprises\Rabbitmq Queue.jpg)

![Workers Waiting](C:\Users\User\Desktop\Troisième[2024-2025]\Troisième Semestre I [2024-2025]\Intégration des applications d'entreprises\WorkersWaiting.jpg)

![Workers Upon Success](C:\Users\User\Desktop\Troisième[2024-2025]\Troisième Semestre I [2024-2025]\Intégration des applications d'entreprises\WorkersUponSuccess.jpg)